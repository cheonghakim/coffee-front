import {
    AdminService
} from './AdminService.js'

export class AdminEvent {
    constructor() {
        this.service = new AdminService();
    }

    async search(cafeData) {
        let result

        try {
            result = await this.service.search(cafeData)
        } catch (e) {
            console.log("error:" + e)
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result)
        } else {
            return result
        }
    }


    async headerMenu(clicked_by_admin) {
        let result
        switch (clicked_by_admin) {
            case "Home":
                try {
                    result = await this.service.callMain()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "Admin":
                try {
                    result = await this.service.callCafeList()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "Search":
                console.log("Search bar clicked")
                break;
            default:
                console.log("Invalid area clicked!")
                break;
        }
    }

    async adminMenu(clicked_by_admin) {
        let result

        switch (clicked_by_admin) {
            case "Hidden Cafe List":
                try {
                    result = await this.service.callCafeList();
                } catch (e) {
                    console.log("error:" + e);
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result);
                } else {
                    return result;
                }
                break;

            case "Member Management":
                try {
                    result = await this.service.callMemberList();
                } catch (e) {
                    console.log("error:" + e);
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;

            case "Add New Hidden Cafe":
                console.log("Add New Hidden Cafe");

            case "Revise Hidden Cafe":
                try {
                    result = await this.service.callReviseCafe()
                } catch (e) {
                    console.log("error:" + e)
                }

                if (result === "undefined" || result === undefined) {
                    console.log("Result is undefined:" + result)
                } else {
                    return result
                }
                break;
            default:
                break;
        }
    }

    async cafeList(cafe_id) {
        let result;

        try {
            result = await this.service.searchCafeInfo(cafe_id);
        } catch (e) {
            console.log("error:" + e);
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result);
        } else {
            return result;
        }
    }

    async caffeineList(user_id) {
        let result;

        try {
            result = await this.service.searchOtherUser(user_id);
        } catch (e) {
            console.log("error:" + e);
        }

        if (result === "undefined" || result === undefined) {
            console.log("Result is undefined:" + result);
        } else {
            return result;
        }
    }
}