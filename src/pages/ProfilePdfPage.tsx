export default function ProfilePdfPage() {
  return (
    <>
      <div id="message">
        <h4>... Loading</h4>
      </div>
      <div id="toload">
        <embed
          src="/sinclair_Company_Profile_Pdf.pdf"
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>
    </>
  );
}
