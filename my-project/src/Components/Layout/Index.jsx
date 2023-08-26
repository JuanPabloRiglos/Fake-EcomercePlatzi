
// si no anda, borrar comentario de abajo.
// eslint-disable-next-line react/prop-types
function Layout({children}){
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    ) 
}

export default Layout;