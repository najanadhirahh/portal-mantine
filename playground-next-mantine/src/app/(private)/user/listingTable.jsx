'use client';

import { genderMap, roleMap, userData } from '@/app/components/data/userRows';
import { ActionIcon, Box, Text, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useEffect, useMemo, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { useTableFilters } from '@/hooks/useTableFilter';
import sortBy from 'lodash/sortBy';
import { Search } from 'lucide-react';
import { IconX } from '@tabler/icons-react';

const PAGE_SIZES = [10, 15, 20];

export function ListignTable() {

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [page, setPage] = useState(1);
    // const [records, setRecords] = useState(userData.slice(0, pageSize));
    
    const [sortStatus, setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });

        const { filters, setFilters, filteredData } = useTableFilters(userData, {
        search: (user, value) => 
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.code.toLowerCase().includes(value.toLowerCase()),
        department: (user, value) => user.department === value,
        role: (user, value) => user.role === value,
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize, filters]);

    // useEffect(() => {
    //     const from = (page - 1) * pageSize;
    //     const to = from + pageSize;
    //     // setRecords(userData.slice(from, to));
    // }, [page, pageSize]);

    //  useEffect(() => {
    //     const data = sortBy(userData, sortStatus.columnAccessor);
    //     // setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
    // }, [sortStatus]);

     const records = useMemo(() => {
        // Sort the filtered data
        const sortedData = sortBy(filteredData, sortStatus.columnAccessor);
        const finalData = sortStatus.direction === 'desc' ? sortedData.reverse() : sortedData;
        
        // Apply pagination
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        return finalData.slice(from, to);
    }, [filteredData, sortStatus, page, pageSize]);




    const columns = [
        {
            accessor: 'id',
            title: '#',
            textAlign: 'right',
            sortable: true
        },
        {
            accessor: "code",
            title: "Employee Code",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search code..."
                    value={filters.code || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, code: e.target.value }))}
                />
            ),
            filtering: filters.code !== '',
        },
        {
            accessor: "name",
            title: "Full Name",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search code..."
                    value={filters.name || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, name: e.target.value }))}
                />
            ),
            filtering: filters.name !== '',
            render: ({ name }) => (
                <Box
                    sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                >
                    {name}
                </Box>
            ),
        },
        {
            accessor: "role",
            title: "Role",
            sortable: true,
            render: ({role}) => {
                const roleName = roleMap[role] || role;
                return (
                    <Box
                        sx={{
                            textTransform: "capitalize",
                        }}
                    >
                        {roleName}
                    </Box>
                );
            },
        },
        {
            accessor: "email",
            title: "Email",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search email..."
                    value={filters.email || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, email: e.target.value }))}
                />
            ),
            filtering: filters.email !== '',
        },
        {
            accessor: "gender",
            title: "Gender",
            sortable: true,
            minWidth: 150,
            render: ({gender}) => {
                const genderName = genderMap[gender] || gender; // fallback if not found
                return (
                    <Box
                        sx={{
                            textTransform: "capitalize",
                        }}
                    >
                        {genderName}
                    </Box>
                );
            },
        },
        {
            accessor: "dob",
            title: "Date of Birth",
            type: "date",
            sortable: true,
            valueGetter: (params) => {
                const value = params;
                return value ? dayjs(value).toDate() : null;

            },
            valueFormatter: (params) => {
                if (!(params instanceof Date) || isNaN(params)) return "";
                return dayjs(params).format("DD-MM-YYYY");
            },
        },
        {
            accessor: "designation",
            title: "Designation",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search designation..."
                    value={filters.designation || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, designation: e.target.value }))}
                />
            ),
            filtering: filters.designation !== '',
        },
        {
            accessor: "department",
            title: "Department",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search department..."
                    value={filters.department || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, department: e.target.value }))}
                />
            ),
            filtering: filters.department !== '',
        },
        {
            accessor: "jobgrade",
            title: "Job Grade",
            sortable: true,
            filter: (
                <TextInput
                    placeholder="Search jobgrade..."
                    value={filters.jobgrade || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, jobgrade: e.target.value }))}
                />
            ),
            filtering: filters.jobgrade !== '',
        },
        {
            accessor: "reportTo",
            title: "Report To",
            sortable: true,
             render: ({ reportTo }) => (
                <Text
                ta="center"
                tt="capitalize"
                c={reportTo === "" ? "dimmed" : "dark"}
                fs={reportTo === "" ? "italic" : "normal"}
                >
                {reportTo === "" ? "-" : reportTo}
                </Text>
            )
        },
    ];
    
    return (
        <DataTable
            height={500}
            textSelectionDisabled
            withTableBorder
            borderRadius="sm"
            withColumnBorders
            striped
            highlightOnHover
            records={records}
            columns={columns}
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
            totalRecords={records.length}
            paginationActiveBackgroundColor="grape"
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
        />
    );
};