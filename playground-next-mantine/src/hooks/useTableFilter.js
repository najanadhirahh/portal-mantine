import { useState, useMemo } from 'react';

export function useTableFilters(initialData, filterConfig) {
    const [filters, setFilters] = useState({});
    
    const filteredData = useMemo(() => {
        return initialData.filter(item => {
            return Object.entries(filters).every(([key, value]) => {
                if (!value) return true;
                
                const filterFn = filterConfig[key];
                if (filterFn) {
                    return filterFn(item, value);
                }
                
                // Default string contains filter
                return String(item[key] || '').toLowerCase().includes(String(value).toLowerCase());
            });
        });
    }, [initialData, filters, filterConfig]);

    return {
        filters,
        setFilters,
        filteredData,
    };
}