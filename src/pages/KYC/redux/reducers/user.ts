const USERS = 'USERS'

const initState: any = {
    userData: []
}

export const user = (state = initState, action: any): any => {
    switch (action.state) {
        case USERS: {
            return {...state, userData: action.userData}
        }
        default:
            return state

    }
}

export const getUser = (user_country: string, user_name: string, type_id: string, number_id: string, front_img: string, back_img: string, user_id: string, selfie: string) => {
    return (dispatch: any) => {
        dispatch({
            type: USERS, userData: {
                userName: user_country,
                userNumber: user_name,
                typeId: type_id,
                numberId: number_id,
                frontImg: front_img,
                backImg: back_img,
                id: user_id,
                selfie: selfie
            }
        })
    }
}