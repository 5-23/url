let body = document.body

async function main(){
    const req = await fetch("https://url-abcuggi.scratcher5-23.repl.co")
    let res = await req.json()
    try{
        console.log(location.href)
        location.href = res[location.href.replace("https://urlb.tk/" , "")]
    }catch{
        body.innerHTML = `404 Not Found`
    }
}

main()