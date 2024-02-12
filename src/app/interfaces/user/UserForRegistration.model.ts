export interface UserForRegistration {
    firstName: string;
    lastName: string;
    emailId: string;
    mobileNo: string;
    userPassword: string;
    roleId: BigInteger;
}

export interface UserEditRegistration {
    firstName: string;
    lastName: string;
    emailId: string;
    mobileNo: string;
    userPassword: string;
    roleId: number;
    userId: number;
}