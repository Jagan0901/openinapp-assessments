

export const Total = () => {
    const data = [
      {
        id: 1,
        type: "Revenues",
        price: "$2,129,430",
      },
      {
        id: 2,
        type: "Transactions",
        price: "1,520",
      },
      {
        id: 3,
        type: "Likes",
        price: "9,721",
      },
      {
        id: 4,
        type: "Users",
        price: "9,721",
      },
    ];
  return (
    <div className="total">
        {data.map((data)=>(<div key={data.id}>
            <h6>Total {data.type}</h6>
            <h1>{data.price}</h1>
        </div>))}
    </div>
  )
}
