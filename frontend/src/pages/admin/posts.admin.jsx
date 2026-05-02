import { Table, TableHead, TableBody, TableRow, TableCell, TableHeadCell, Button, Pagination, PaginationButton } from "flowbite-react"
import { useState } from "react"
import { getAdminBlogs } from "../../apis/admin/admin.api"
import Loader from "../../components/Loader"
import { useFetch } from "../../hooks/useFetch"
import { toast } from "react-toastify"

export const AdminPosts =()=>{
        const [pageNo, setPageNo] = useState(1)
        const {data,error,isError,isLoading} = useFetch(()=>getAdminBlogs(pageNo),["AdminBlogs",pageNo])
        
        
          if(isLoading) return <Loader/>
          if(isError) toast.error(error)

            const handlePageChange = (pageNumber) => {
  console.log("User wants to see page:", pageNumber);
  setPageNo(pageNumber); // Update the state
};
        
    return(
        <div className="bg-gray-700 w-full">
              <header className="flex justify-between items-center w-full p-3 bg-gray-600 ">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white w-full p-2">Your Blogs</h1>
              </header>

              <Table className="border border-white">
                <TableHead className="border border-white">
                    <TableHeadCell>N0</TableHeadCell>
                    <TableHeadCell>Id</TableHeadCell>
                    <TableHeadCell>Title</TableHeadCell>
                    <TableHeadCell>Actions</TableHeadCell>
                </TableHead>
                <TableBody>
                    {
                        data.data.map((item, id)=>{
                            return(      
                                <TableRow>
                                <TableCell className="border border-white">{id+1}</TableCell>
                                <TableCell className="border border-white">{item._id}</TableCell>
                                <TableCell className="border border-white">{item.title}</TableCell>
                                <TableCell className="border border-white w-full flex items-center justify-start gap-6">
                               <Button color="blue">View</Button>
                               <Button color="green">Update</Button>
                                <Button color="red">Delete</Button>
                    </TableCell>
                                </TableRow>        
                    )
                })
                    }
                </TableBody>
              </Table>

        <Pagination
        className="text-center mt-12" 
  currentPage={pageNo} 
  totalPages={data?.data?.length === 10 ? pageNo + 1 : pageNo} 
  onPageChange={handlePageChange} 
/>
        </div>
    )
}