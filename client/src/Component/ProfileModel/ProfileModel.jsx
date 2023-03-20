import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModel({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      title="Your info"
      overlayProps={{
        color:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      }}
      size="55%"
    >
      <form className="infoFrom">
        <div className="">
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Works At"
            className="infoInput"
            name="worksAt"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Lives In"
            className="infoInput"
            name="livesIn"
          />
          <input
            type="text"
            placeholder="Country"
            className="infoInput"
            name="country"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="RelastionShip Status"
            className="infoInput"
            name="rel"
          />
        </div>
        <div className="">
          <div className="flex gap-3">
            <span className="min-w-fit">Profile Image</span>
            <input type="file" name="profileImg" />
          </div>
          <div className="flex gap-3">
            <span className="min-w-fit">Cover Image</span>
            <input type="file" name="coverImg" />
          </div>
        </div>
        <button className="button infoBtn" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
}
export default ProfileModel;
