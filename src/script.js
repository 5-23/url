// let body = document.body

let hrefName = decodeURI(location.href.split("?")[1])
let res = youtuberJson()
let html

//https://url-abcuggi.scratcher5-23.repl.co
async function youtuberJson(){
    const req = await fetch("https://url-abcuggi.scratcher5-23.repl.co")
    const res = await req.json()
    delete req
    if (req.status == 200){
        return {
            status: 200,
            message: "정상적으로 작동하였습니다",
            data: res
        }
    }else{
        return {
            status: res.status,
            message: "무언가 문제가 있어요",
            data: {}
        }
    }
}
    
async function main(){
    res = await youtuberJson()
    console.log(res)
}

main()
