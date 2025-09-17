import { Text, TextInput, Button, ActionIcon } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react";
import { IconCopy, IconCheck } from "@tabler/icons-react";
import { CopyButton } from "@mantine/core";
import Service from "../utils/http";

const obj = new Service();

export default function UrlResponse(props) {
  const surl = obj.getBaseURL() + "/api/s/" + props?.response?.shortCode;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
        borderRadius: "1.2rem",
        background: "white",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        maxWidth: "420px",
        margin: "2rem auto",
      }}
    >
      {/* Display short URL */}
      <Text
        c="blue"
        fw={700}
        size="lg"
        style={{
          whiteSpace: "nowrap",       // keep in single line
          overflow: "hidden",         // hide overflow
          textOverflow: "ellipsis",   // show "..." if too long
          maxWidth: "100%",           // limit width to container
          cursor: "pointer",
        }}
        onClick={() => window.open(surl, "_blank")}
        title={surl} // tooltip to show full URL on hover
      >
        {surl}
      </Text>

      {/* QR Code */}
      <div
        style={{
          padding: "10px",
          borderRadius: "1rem",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <QRCodeSVG
          value={surl}
          size={220}
          imageSettings={{
            excavate: true,
            src: "/HomeBackground.png",
            height: 40,
            width: 40,
          }}
        />
      </div>

      {/* Copyable text input */}
      <CopyButton value={surl} timeout={2000}>
        {({ copied, copy }) => (
          <TextInput
            value={surl}
            readOnly
            radius="md"
            size="md"
            styles={{
              input: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
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
      <Button
        mt="md"
        color="red"
        radius="md"
        size="md"
        fullWidth
        onClick={() => props.setResponse(null)}
      >
        Reset
      </Button>
    </div>
  );
}
