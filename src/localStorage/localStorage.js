class GetPostLocalStorageDatas{
    static getData() {
        const datas = localStorage.getItem("invoiceLocalStorage")

        if (datas){
            const parseDatas = JSON.parse(datas);
            return parseDatas
        }

        return null
    }

    static postData(data) {
        const json = JSON.stringify(data);
        localStorage.setItem("invoiceLocalStorage", json);
    }
}

export default GetPostLocalStorageDatas
