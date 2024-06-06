export function Listing(props) {
    const { items } = props;
    return(
        <div className="item-list">
        {items.map((el, index) => (
            el.MainImage? (
                <div key={ el.listing_id } className="item">
                    <div className="item-image">
                        <a href={ el.url }>
                            <img src={ el.MainImage.url_570xN }/>
                        </a>
                    </div>
                    <div key={ el.listing_id + "details" } className="item-details">
                        <p key={ el.listing_id + '-1' } className="item-title">{ (el.title.length > 50)?
                         (el.title.substr(0, 50) + "..."):el.title }</p>
                        <p key={ el.listing_id + '-2' } className="item-price">{ el.currency_code = "USD"?
                        ("$" + el.price) : (el.currency_code = "EUR"? ("€" + el.price):(el.price + " " + el.currency_code)) }</p>
                        {
                            Number(el.quantity) < 10?
                            <p key={ el.listing_id + '-3'} className="item-quantity level-low">{ el.quantity }</p>:
                            (Number(el.quantity) < 20?
                            <p key={ el.listing_id + '-3'} className="item-quantity level-medium">{ el.quantity }</p>:
                            <p key={ el.listing_id + '-3'} className="item-quantity level-high">{ el.quantity }</p>
                            )
                        }
                        
                    </div>
                </div>): (<div key={ index }></div>)
           ))}
           </div>
    )
}
