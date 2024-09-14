
 function svg () {
    return (
        <main>
            <div>
                <div>SVG DEMO</div>
                <div>
                    {/* 线 */}
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                        <line x1={20} y1={20} x2={90} y2={90} stroke="red" strokeWidth={1}></line>
                    </svg>
                </div>

                <div>
                <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg">
               
                <polygon points="60,30 90,90 30,90" fill="blue">
                    <animate
                        attributeName="fill"
                        attributeType="XML"
                        values="red;green"
                        dur="10s"
                        repeatCount="indefinite" />
                </polygon>
                <line x1="60" y1="90" x2="60" y2="150"  fill="blue" strokeWidth="10" stroke="blue"> 
                    <animate
                        attributeName="stroke"
                        attributeType="XML"
                        values="red;green"
                        dur="10s"
                        repeatCount="indefinite" />
                    </line>
                </svg>
                </div>
            </div>
        </main>
    )
}

export default svg