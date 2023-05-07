

const PageTitle = ({title,className}) => {
  return (
    <div className={`${className} title relative text-left text-[26px] font-bold capitalize mb-4`}><span>{title}</span></div>
  )
}

export default PageTitle