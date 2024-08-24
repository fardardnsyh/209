import { CheckIcon, XIcon } from 'lucide-react';

function ErrorRequestModal({message, isError, setError}) {

    return (
        <>
            <div className={`fixed top-0 left-0 w-full z-50 text-[red] dark:text-white bg-red-100 dark:bg-red-900 transition-all ${!isError && "hidden"}`}>
                <div className='flex items-center justify-between py-[0.5em] px-[1em]'>
                    <p>{message}</p>
                    <button onClick={()=>{setError(false)}}>
                        <XIcon size={"18px"} strokeWidth={"3px"}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ErrorRequestModal
