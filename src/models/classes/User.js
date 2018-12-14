class User {
    constructor(firstname = '', lastname = '', gender = '', email = '', phone = 0, password = '', confirmpassword = '', job = '', tardiness = 0) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.job = job;
        this.tardiness = tardiness;
    }
}

export default User;