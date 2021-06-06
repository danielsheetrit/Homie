
export function LongTxt({ txt, numOfChars }) {
    const dots = txt.length < numOfChars ? '' : '...'
    const shortTxt = txt.slice(0, numOfChars) + dots
    return <p className="long-txt">{shortTxt}</p>
}