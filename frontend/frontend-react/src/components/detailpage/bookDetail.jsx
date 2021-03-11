export const BookDetails = ({detail}) => {

    return (
        <div>
            <h4>Özellikler</h4>
            <p>Cilt Durumu	:	{detail.skin_condition}</p>
            <p>Basım Tarihi	:	{detail.date_of_publication}</p>
            <p>Basım Yeri	:	{detail.place_of_publication}</p>
            <p>Boyutlar	:	{detail.dimesion}</p>
            <p>Basım Dili	:	Türkçe</p>
            <p>Orijinal Dil	:	{detail.language_of_publication}</p>
            <p>Kağıt Tipi	:	{detail.paper_type}</p>
            <p>Sayfa Sayısı	:	{detail.number_of_pages}</p>
            <p>Barkod	:	{detail.barcode}</p>
        </div>
    )
}