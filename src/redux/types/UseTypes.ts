export interface loginPayload {
    email: string,
    password: string,
    isLoggedInHere: number
}

export interface LoginResponse {
    isRuleAutomationEnabled: number
    message: string
    success: boolean
    token: string
    userDetails: UserDetailsProps
}

export interface UserDetailsProps {
    accountType: string
    blinkitProfileStatus: boolean
    email: string
    flipkartProfileStatus: boolean
    fullName: string
    instamartProfileStatus: boolean
    lastLoginTime: string
    myntraProfileStatus: boolean
    phoneNumber: string
    profileStatus: boolean
    role: string
}