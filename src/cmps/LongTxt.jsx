
export function LongTxt({ txt, numOfChars }) {
    let shortTxt = txt.slice(0, numOfChars) + '...'
    return <p className="long-txt">{shortTxt}</p>
}