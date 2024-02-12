function TagContentEmpty() {
    return (
        <div className='mb-4 flex flex-col items-center justify-center'>
            <h1 className='mb-2 text-4xl font-semibold'>Essa tag não existe</h1>
            <p className='mb-2 text-sm font-light text-secondary-200'>
                Por favor tente novamente com uma tag diferente.
            </p>
            <p className='mb-2 text-sm font-medium text-secondary-200'>
                <a href='/blog'>Voltar ao ínicio</a>
            </p>
        </div>
    );
}

export default TagContentEmpty;
