'use client';

import { genderMap, roleMap, userData } from '@/app/components/data/userRows';
import { Box, Text } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { DataTable } from 'mantine-datatable';
import { useTableFilters } from '@/hooks/useTableFilters';

const PAGE_SIZES = [10, 15, 20];

export function ListignTable() {

    const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(userData.slice(0, pageSize));
    
    const [sortStatus, setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords(userData.slice(from, to));
    }, [page, pageSize]);

    
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
            sortable: true
        },
        {
            accessor: "name",
            title: "Full Name",
            sortable: true,
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
            sortable: true
        },
        {
            accessor: "department",
            title: "Department",
            sortable: true
        },
        {
            accessor: "jobgrade",
            title: "Job Grade",
            sortable: true,
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

    const { filters, setFilters, filteredData } = useTableFilters(userData, {
        search: (user, value) => 
            user.fullname.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.employeecode.toLowerCase().includes(value.toLowerCase()),
        department: (user, value) => user.department === value,
        role: (user, value) => user.role === value,
    });

    return (
        <DataTable
            height={500}
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
}