class Module {
    /**
     * 
     * @param { String } message Module example message
     */
    constructor(message) {
        this.msg - msg
    }
    get message() {
        return this.msg
    }
    set message(newMessage) {
        this.msg = newMessage
    }
    call() {
        if (!this.msg.length) throw new Error("Message not set!")
        console.log("Message:", this.msg)
    }
}


export default Module