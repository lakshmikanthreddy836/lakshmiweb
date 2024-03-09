const ContactInfo = (props) => {
  const setData = props?.data2;
  console.log("set data2", setData);
  return (
    <div className="tab-content" style={{ boxSizing: "border-box" }}>
      <div
        role="tabpanel"
        className="tab-pane fade in active show"
        id="tab1"
        style={{
          boxSizing: "border-box",
          transition: "opacity 0.15s linear 0s",
          display: "block",
        }}
      >
        <table
          className="table"
          style={{
            boxSizing: "border-box",
            borderCollapse: "collapse",
            width: "667.328px",
            marginBottom: "1rem",
            color: "rgb(33, 37, 41)",
          }}
        >
          <tbody style={{ boxSizing: "border-box" }}>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Contact No
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                {setData?.contact_person_phone_number}
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Contact Person
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                {setData?.contact_person_name} 
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Owner KYC
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                {setData?.userInfo?.kyc_verified.toUpperCase()}
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Store Email
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                {setData?.resturant_email}
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Address
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                {setData?.city}
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Owner Details
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                <strong
                  style={{
                    boxSizing: "border-box",
                    fontWeight: "bolder",
                  }}
                >
                  {setData?.userInfo?.first_name} {setData?.userInfo?.last_name} {setData?.userInfo?.sir_name}
                </strong>
                <span>&nbsp;</span>/ {setData?.userInfo?.email} / {setData?.userInfo?.phone}
              </td>
            </tr>
            <tr style={{ boxSizing: "border-box" }}>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                Bank Details
              </td>
              <td
                style={{
                  boxSizing: "border-box",
                  padding: "0.75rem",
                  borderTop: "1px solid rgb(222, 226, 230)",
                }}
              >
                A/C Name: {setData?.account_holder_name}; A/C No. {setData?.account_number}; IFSC Code: {setData?.ifsc_code}; Bank Name {setData?.bank_name} &amp; Branch - {setData?.branch_name}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactInfo;
