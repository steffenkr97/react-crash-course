function BetBox() {
  return (
    <div className="mt-5">
        <div className="py-2 border bg-red-100">LAYER 1</div>
        <div className="flex flex-row justify-between py-2 border bg-blue-100">
            <div className="bg-yellow-200 w-full py-12 text-center">BET BUTTON 1</div>
            <div className="bg-green-200 w-full py-12 text-center">BET BUTTON 2</div>
        </div>
        <div className="py-2 border bg-fuchsia-100">LAYER 3</div>
    </div>
  )
}

export default BetBox