import Head from "next/head";

export default function ApplyPage() {
  return (
    <>
      <Head>
        <title>Apply</title>
        <meta name="description" content="Apply for financial assistance from the Madeleine Mary Walker Foundation." />
        <meta name="keywords" content="apply, madeleine mary walker" />
      </Head>

      <div className="mx-auto md:w-2/3">
        <div className="bg-teal-600 text-gray-100 p-5 my-5 rounded">
          <h2 className="text-2xl font-semibold mb-4">Application Information</h2>

          <p>
            To apply, please complete the form below. Alternatively, you can download{" "}
            <a
              href="https://docs.google.com/document/d/16qYiTrjOO4qey0g9Q2OfU_PPr7pyRr2F/export?format=doc"
              className="font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              this
            </a>{" "}
            application form and email a completed version to{" "}
            <a href="mailto:m100pfb@yahoo.co.uk" className="font-bold underline">
              m100pfb@yahoo.co.uk
            </a>.
          </p>
        </div>
      </div>

      <form
        className="mx-auto md:w-2/3 md:flex md:flex-wrap md:justify-between"
        action="https://formspree.io/f/m100pfb"
        method="POST"
        encType="multipart/form-data"
      >
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-6 leading-tight"
          type="text"
          placeholder="Name"
          name="Name"
          required
        />

        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="Street"
          name="Street"
          required
        />

        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="Town / City"
          name="Town/City"
          required
        />

        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="County"
          name="County"
          required
        />

        <input
          type="text"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="Postcode"
          name="Postcode"
          required
        />

        <input
          type="email"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="Email"
          name="Email"
          required
        />

        <input
          type="tel"
          className="appearance-none block w-full bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700"
          placeholder="Phone Number"
          name="Phone Number"
          required
        />

        <textarea
          className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
          placeholder="Outline the basis of your application, including details of your income, outgoings and any shortfall"
          rows={8}
          name="Application"
          required
        />

        <textarea
          className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full"
          placeholder="Include here any evidence in support of your application, such as proof of acceptance on chosen course, costs of equipment, testimonials"
          rows={8}
          name="Evidence"
          required
        />
        
        <span> If you wish to upload any files (such as references), please upload them here. </span>
        <input 
        className="appearance-none bg-gray-200 mb-6 px-3 py-2 rounded-md text-gray-700 w-full" 
        type="file" 
        name="attachment" 
        />

        <button
          type="submit"
          className="border-b-4 border-gray-700 hover:border-gray-600 bg-gray-600 hover:bg-gray-500 font-bold px-4 py-2 rounded text-sm text-white float-right"
        >
          Submit
        </button>
      </form>
    </>
  );
}
