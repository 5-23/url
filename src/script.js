let body = document.body

async function main(){
    const req = await fetch("https://url-abcuggi.scratcher5-23.repl.co")
    let res = await req.json()
    console.log(res)
    try{
        console.log(location.href)
        location.href = res[decodeURL(location.href.replace("https://urlb.tk/" , ""))].url
    }catch{
        body.innerHTML = `404 Not Found`
        document.title = `404 Not Found`
    }
}

main()
