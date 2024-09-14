export default function tabs () {

    // 渲染列表
    // 1. 定义一个数组
    const tabs = []
    for(let i=0; i<30; i++) {
        let index = (i + 1).toString()
        tabs.push({
            label: 'tab-' + index,
            id: index
        })
    }

    const listItems = tabs.map(tab => 
            <li key={tab.id}>{ tab.label }</li>
        )
    return (
        <main>
            <div>
                <ul>
                    { listItems }
                </ul>
            </div>
        </main>
    )
}