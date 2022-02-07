import { FC } from "react"
import { ActivePage, Page, PaginationContainer } from "../styles"


interface PageProps {
  label: string
  onClick: () => void
  active?: boolean
}

const PageContainer: FC<PageProps> = ({ label, onClick, active }) => {
  return (
    active 
      ? <ActivePage onClick={onClick}>{label}</ActivePage> 
      : <Page onClick={onClick}>{label}</Page>
  )
}

interface PaginationProps {
  setPage: (page: number) => void
  page: number
  numberOfPages: number
}

export const Pagination: FC<PaginationProps> = ({ setPage, page, numberOfPages }) => {
  const pages = Array.from(Array(numberOfPages).keys())

  return (
    <PaginationContainer>
      <PageContainer label="&laquo;" onClick={() => page !== 0 && setPage(page - 1)}/>
      {pages.map(element => (
        <PageContainer 
          active={page === element} 
          label={(element + 1).toString()} 
          key={element} 
          onClick={() => setPage(element)}
        />
      ))}
      <PageContainer label="&raquo;" onClick={() => page !== numberOfPages - 1 && setPage(page + 1)}/>
    </PaginationContainer>
  )
}