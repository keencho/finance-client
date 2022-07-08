import {
  createTable,
  useReactTable,
  ColumnResizeMode,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table'
import {useEffect, useReducer, useState} from 'react';
import {BootstrapTable, TableHead, TableResizer, TableWrapper} from '@/components/table/Table.styled';
import {useTheme} from 'styled-components';
import {TableModel} from '@/models/table/table.model';

const Table = (props: TableModel) => {
  
  const theme = useTheme();
  
  const [data, setData] = useState<typeof props.data>([])
  const [columns] = useState<typeof props.columnDef>(() => [ ...props.columnDef ])
  
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange')
  
  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    getCoreRowModel: getCoreRowModel(),
    debugTable: false,
    debugHeaders: false,
    debugColumns: false,
  })
  
  useEffect(() => {
    setData(props.data)
  }, [props.data])
  
  return (
    <TableWrapper>
      <BootstrapTable
        striped bordered hover variant={theme.mode}
        size={props.size}
        {...{
          style: {
            width: table.getCenterTotalSize()
          },
        }}
      >
        <TableHead>
        {
          table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {
                headerGroup.headers.map(header => (
                  <th
                    {...{
                      key: header.id,
                      colSpan: header.colSpan,
                      style: {
                        width: header.getSize(),
                        position: 'relative'
                      }
                    }}
                    >
                    {
                      header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )
                    }
                    <TableResizer
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        // className: `resizer ${
                        //   header.column.getIsResizing() ? 'isResizing' : ''
                        // }`,
                        style: {
                          transform:
                            columnResizeMode === 'onEnd' &&
                            header.column.getIsResizing()
                              ? `translateX(${
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                              : ''
                          ,
                        },
                      }}
                    />
                  </th>
                ))
              }
            </tr>
          ))
        }
        </TableHead>
        <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td
                {...{
                  key: cell.id,
                  style: {
                    width: cell.column.getSize(),
                  },
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </BootstrapTable>
    </TableWrapper>
  )
}

export default Table
