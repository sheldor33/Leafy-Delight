// import cookie from "cookie";

// const handler = (req, res) => {
//   if (req.method === "POST") {
//     const { username, password } = req.body;
//     if (
//       username === process.env.ADMIN_USERNAME &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       res.setHeader(
//         "Set-Cookie",
//         cookie.serialize("token", process.env.TOKEN, {
//           maxAge: 60 * 60,
//           sameSite: "strict",
//           path: "/",
//         })
//       );
//       res.status(200).json("Succesfull");
//     } else {
//       res.status(400).json("Wrong Credentials!");
//     }
//   }
// };

// export default handler;
import cookie from "cookie";

const handler = (req, res) => {
    if (req.method == "POST"){
        const {username, password} = req.body;
        if(username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD){
            res.setHeader("Set-Cookie", cookie.serialize("token","SWdw4CV%7C%7C663Z%7Bp3%7CZXtP%250k6Ejj%3BF", {
                maxAge: 60*60,
                sameSite: "strict",
                path:"/", 
            })
          );
          res.status(200).json("Succesfull");
        } else {
            res.status(400).json("Wrong Credentials!");
        }
    }
};

export default handler;