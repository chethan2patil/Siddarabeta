export default function FacebookFeed() {
  return (
    <section className="facebook-feed">
      <h2>Follow Us on Facebook</h2>
      <div className="fb-container">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsiddarabettamath&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId="
          width="100%"
          height="600"
          style={{maxWidth: '500px', margin: '0 auto'}}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Siddarabetta Matha Facebook"
        ></iframe>
      </div>
    </section>
  );
}