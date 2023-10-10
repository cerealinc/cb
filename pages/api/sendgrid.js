import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "info@carvingblockpr.com", // Your email where you'll receive emails
      from: "paul@madebycereal.com", // your website email address here
      subject: `NEW CONTACT - WEBSITE FORM`,
      html: `<div>EMAIL: ✉️${req.body.email}</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;