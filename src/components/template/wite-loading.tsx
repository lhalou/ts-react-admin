import React from "react"

const WiteLoading = (comp:JSX.Element) => {
    return (<React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>)
}

export default WiteLoading