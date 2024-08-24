import GetPostLocalStorageDatas from "../localStorage/localStorage"

class UsefulHooks{

    static provideCrollbarState () {
        const scrollState = {"isDisplay": false}
        GetPostLocalStorageDatas.postData(scrollState)
    }

    static changeScrollBarState () {
        
    }
}

export default UsefulHooks