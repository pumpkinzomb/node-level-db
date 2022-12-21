export const unicodeTranslation = (text) => {
  // <Null>
  let re = new RegExp("\\u0000", "gi");
  text = text.replaceAll(re, "(NUL)");
  // <Start of Heading>
  re = new RegExp("\\u0001", "gi");
  text = text.replaceAll(re, "(SOH)");
  // <Start of Text>
  re = new RegExp("\\u0002", "gi");
  text = text.replaceAll(re, "(STX)");
  // <End of Text>
  re = new RegExp("\\u0003", "gi");
  text = text.replaceAll(re, "(ETX)");
  // <End of Transmission>
  re = new RegExp("\\u0004", "gi");
  text = text.replaceAll(re, "(EOT)");
  // <Enquiry>
  re = new RegExp("\\u0005", "gi");
  text = text.replaceAll(re, "(ENQ)");
  // <Acknowledge>
  re = new RegExp("\\u0006", "gi");
  text = text.replaceAll(re, "(ACK)");
  // <Alert>
  re = new RegExp("\\u0007", "gi");
  text = text.replaceAll(re, "(BEL)");
  // <Backspace>
  re = new RegExp("\\u0008", "gi");
  text = text.replaceAll(re, "(BS)");
  // <Character Tabulation>
  re = new RegExp("\\u0009", "gi");
  text = text.replaceAll(re, "(HT, TAB)");
  // <Data Link Escape
  re = new RegExp("\\u0010", "gi");
  text = text.replaceAll(re, "(DLE)");
  // <Device Control One>
  re = new RegExp("\\u0011", "gi");
  text = text.replaceAll(re, "(DC1)");
  // <Device Control Two>
  re = new RegExp("\\u0012", "gi");
  text = text.replaceAll(re, "(DC2)");
  // <Device Control Three>
  re = new RegExp("\\u0013", "gi");
  text = text.replaceAll(re, "(DC3)");
  // <Device Control Four>
  re = new RegExp("\\u0014", "gi");
  text = text.replaceAll(re, "(DC4)");
  // <Negative Acknowledge>
  re = new RegExp("\\u0015", "gi");
  text = text.replaceAll(re, "(NAK)");
  // <Synchronous Idle>
  re = new RegExp("\\u0016", "gi");
  text = text.replaceAll(re, "(SYN)");
  // <End of Transmission Block>
  re = new RegExp("\\u0017", "gi");
  text = text.replaceAll(re, "(ETB)");
  // <Cancel>
  re = new RegExp("\\u0018", "gi");
  text = text.replaceAll(re, "(CAN)");
  // <End of Medium>
  re = new RegExp("\\u0019", "gi");
  text = text.replaceAll(re, "(EOM)");
  // <Substitute>
  re = new RegExp("\\u001a", "gi");
  text = text.replaceAll(re, "(SUB)");
  // <Escape>
  re = new RegExp("\\u001b", "gi");
  text = text.replaceAll(re, "(ESC)");
  // <File Separator>
  re = new RegExp("\\u001c", "gi");
  text = text.replaceAll(re, "(FS)");
  // <Locking-Shift One>
  re = new RegExp("\\u000e", "gi");
  text = text.replaceAll(re, "(SO)");

  return text;
};
