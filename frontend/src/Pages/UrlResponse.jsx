import { Text, TextInput, Button, ActionIcon } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { CopyButton } from "@mantine/core";
import Service from "../utils/http";


const obj = new Service();

export default function UrlResponse(props) {
  const surl = obj.getBaseURL() + "/api/s/" + props?.response?.shortCode;

  return (
    <div style={{ textAlign: "center" }}>
      {/* Display short URL */}
      <Text c="blue" fw={600} mb="md">
        {surl}
      </Text>

      {/* QR Code */}
      <QRCodeSVG
        value={surl}
        size={250}
        imageSettings={{
          excavate: true,
          src: "/HomeBackground.png",
          height: 50,
          width: 50,
        }}
      />

      {/* Copyable text input */}
      <CopyButton value={surl} timeout={2000}>
        {({ copied, copy }) => (
          <TextInput
            value={surl}
            readOnly
            mt="md"
            rightSection={
              <ActionIcon
                color={copied ? "teal" : "blue"}
                variant="subtle"
                onClick={copy}
              >
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            }
          />
        )}
      </CopyButton>

      {/* Reset button */}
      <Button mt="md" color="red" onClick={() => props.setResponse(null)}>
        Reset
      </Button>
    </div>
  );
}