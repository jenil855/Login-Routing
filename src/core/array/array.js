export const LoginData = {
    "Admin": [
        {
            "auth": [
                {
                    "userID": "admin@gmail.com",
                    "password": "admin",
                    "userType": "Admin"
                },
            ],
            "NOT": "User"
        },
        {
            "Modual": [
                {
                    "module": "ProductManage"
                },
                {
                    "module": "Accout_Handling"
                }
            ]
        }
    ],
    "User": [
        {
            "auth": [
                {
                    "userID": "user@gmail.com",
                    "password": "user",
                    "userType": "User"
                },
            ],
            "NOT": "Admin"
        },
        {
            "Modual": [
                {
                    "module": "Products"
                },
                {
                    "module": "Cart"
                }
            ]
        }
    ],
}
export const Session = JSON.parse(localStorage.getItem("All-User-Control"));
export const E403 = Session ? Session[0].NOT : null
export const UType = Session ? ("/" + Session[0].auth[0].userType) : null
export const Login = "/Signin"
export const Modual = Session ? Session[1].Modual : null
