import statistics from "../../assets/Designstats-bro.png"

function Statistics() {

    return (
        <>

            <div className="flex flex-col items-center pt-[2em]">
                <p className="text-red-700 text-[1.5em] dark:text-red-600 font-semibold">Desolé les statistiques seront disponibles prochainement !</p>
                <div className={`m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat w-[40em] h-[30em]`} style={{ backgroundImage: `url(${statistics})` }}>
                            </div>
            </div>
        </>
    )
}

export default Statistics
