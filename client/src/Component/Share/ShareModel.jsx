import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

function ShareModel({ modalOpened, setModalOpened }) {
  console.log(`modalOpened : ${modalOpened}`);
  const theme = useMantineTheme();

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      title=" "
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="55%"
      className="flex"
    >
      <PostShare />
    </Modal>
  );
}
export default ShareModel;
