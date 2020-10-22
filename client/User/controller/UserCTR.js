import {
  UserComponent
} from "../component/UserComponent.js";
import {
  UserEvent
} from "../service/UserEvent.js";

export class UserCTR {
  constructor() {
    this.comp = new UserComponent()
    this.service = new UserEvent()
    this.self = this;

    // this.view.signin(this.signin, this.self)
    // this.view.signup(this.signup, this.self)
    this.comp.addCafe(this.addCafe, this.self)
    this.comp.search(this.search, this.self)
    this.comp.settings(this.settings, this.self)
    this.comp.addReview(this.addReview, this.self)
    this.comp.headerMenu(this.headerMenu, this.self)
    this.comp.userMenu(this.userMenu, this.self)
    this.comp.cafeList(this.cafeList, this.self)
    this.comp.caffeineList(this.caffeineList, this.self)

  }
  //callback functions are to be splited into UserComponent and UserService

  // async signin(userData) {
  //   let event = new UserEvent()
  //   let comp = new UserComponent()
  //   let result

  //   for (let value of userData.values()) {
  //     console.log("value-ctr:" + value)
  //   }

  //   try {
  //     result = await event.signin(userData)
  //   } catch (e) {
  //     console.log("error:" + e)
  //   }

  //   if (result[0] === "user") {
  //     let result_str = JSON.parse(result[1])
  //     comp.makeLoginMain(result_str)
  //   } else if (result[0] === "admin") {
  //     let result_str = JSON.parse(result[1])
  //     comp.makeAdminMain(result_str)
  //   }

  // }

  // async signup(userData) {
  //   let event = new UserEvent()

  //   for (let value of userData.values()) {
  //     console.log("value-ctr:" + value)
  //   }

  //   try {
  //     await event.signup(userData)
  //   } catch (e) {
  //     console.log("error:" + e)
  //   }
  //   //make display with communication
  // }

  async addCafe(userData) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    for (let value of userData.values()) {
      console.log("value-ctr:" + value)
    }

    try {
      result = await event.addCafe(userData)
    } catch (e) {
      console.log("error:" + e)
    }

    comp.makeAddCafe(result)
  }

  async search(userData) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    for (let value of userData.values()) {
      console.log("value-ctr:" + value)
    }

    try {
      result = await event.search(userData)
    } catch (e) {
      console.log("error:" + e)
    }

    comp.makeSearchResult(result)
  }

  async settings(userData) {
    let event = new UserEvent()

    for (let value of userData.values()) {
      console.log("value-ctr:" + value)
    }

    try {
      result = await event.settings(userData)
    } catch (e) {
      console.log("error:" + e)
    }

  }

  async addReview(userData) {
    let event = new UserEvent()

    for (let value of userData.values()) {
      console.log("value-ctr:" + value)
    }

    try {
      await event.addReview(userData)
    } catch (e) {
      console.log("error:" + e)
    }

  }

  async headerMenu(userData) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    try {
      result = await event.headerMenu(userData)
    } catch (e) {
      console.log("error:" + e)
    }

    switch (userData) {
      case "Home":
        comp.makeLoginMain(result)
      case "Search":
        // comp.makeSearchResult(result)
        console.log("Search menu clicked")
      case "User":
        comp.makeDashboard(result)
    }

  }

  async userMenu(userData) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    try {
      result = await event.userMenu(userData)
    } catch (e) {
      console.log("error:" + e)
    }

    switch (userData) {
      case "Dashboard":
        comp.makeDashboard(result)
      case "My Hidden Cafe":
        comp.makeVisitedCafe(result)
      case "My Subscription":
        comp.makeSubscription(result)
      case "Add New Hidden Cafe":
        comp.makeAddCafe()
      case "Bookmark":
        console.log("CTR-Bookmark")
      case "settings":
        comp.makeSettings()
    }
  }
  async cafeList(cafe_id) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    try {
      result = await event.cafeList(cafe_id)
    } catch (e) {
      console.log("error:" + e)
    }

    comp.makeCafeInfo(result)
  }

  async caffeineList(user_id) {
    let event = new UserEvent()
    let comp = new UserComponent()
    let result

    try {
      result = await event.caffeineList(user_id)
    } catch (e) {
      console.log("error:" + e)
    }

    comp.makeVisitedCafe(result) //other user's page, it has to be rivesed
  }
}