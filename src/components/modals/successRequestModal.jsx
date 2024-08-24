import { CheckIcon, XIcon } from 'lucide-react';

function SuccessRequestModal({message, isSuccess, setSuccess}) {

    return (
        <>
            <div className={`fixed w-full top-0 left-0 z-50 text-[green] dark:text-white bg-green-100 dark:bg-green-900 transition-all ${!isSuccess && "hidden"}`}>
                <div className='flex items-center justify-between py-[0.6em] px-[1em]'>
                    <p>{message}</p>
                    <button onClick={()=>{setSuccess(false)}}>
                        <XIcon size={"18px"} strokeWidth={"3px"}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SuccessRequestModal
