
function ErrorMessage({message}) {

    return (
        <div className='text-[red] min-h-6 font-medium dark:text-red-500'>
            <p>{message}</p>
        </div>
  );
}

export default ErrorMessage;