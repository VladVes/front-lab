import React from "react";
import { DropdownMulti } from "./DropDownGeneric";

const Dropdown = ({
  options,
  // viewSettings,
  requestsCompleted,
  // showCustomModal,
  // updateDraftSettings,
}) => {
  // const showOverlaysCustomModal = () => {
  //   showCustomModal(
  //     {
  //       title: t('toolBar.overlaysModalTitle'),
  //       preventAutoClosing: true,
  //       onCloseClicked: handleCloseClick,
  //     },
  //     () => <CustomOverlaysModal />,
  //   );
  // };

  // const clearSelectedOverlays = () => {
  //   updateDraftSettings({
  //     overlayIds: [],
  //   });
  // };

  const handleChange = (value) => {
    const fieldValue = value.map((item) => item.value);
    console.log("on change: ", fieldValue);
  };

  console.log("RENDER OVERLAYS DROPDOWN");

  return (
    <DropdownMulti
      // icon={<Overlays />}
      label="Dropdown"
      hideLabelOnIPad
      options={options}
      // value={selected}
      onChange={handleChange}
      loading={!requestsCompleted}
      selectWidth="178px"
      // customActions={
      //   <DropdownCustomActions>
      //     {[
      //       {
      //         icon: <Pencil />,
      //         label: t('toolBar.overlaysActions.custom'),
      //         onClick: showOverlaysCustomModal,
      //         loading: !requestsCompleted,
      //       },
      //       {
      //         icon: <Cross />,
      //         label: t('toolBar.overlaysActions.clearAll'),
      //         onClick: clearSelectedOverlays,
      //         loading: !requestsCompleted,
      //       },
      //     ]}
      //   </DropdownCustomActions>
      // }
    />
  );
};

export default Dropdown;
