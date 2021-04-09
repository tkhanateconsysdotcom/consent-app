import React from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid";

import { Text, Button } from "components";
import { partners } from "ducks";
import { Partner, PartnerPayload } from "interfaces";
import { t } from "utils";

import styles from "./AddPartnerButton.styles";

interface Props {
  partnerData: Partner;
  partnerPayload: PartnerPayload;
  goBack: () => void;
}

const AddPartnerButton = ({ goBack, partnerPayload, partnerData }: Props) => {
  const dispatch = useDispatch();

  const addPartner = () => {
    const partner = {
      ...partnerData,
      ...partnerPayload,
      id: uuid(),
      isMitigated: false,
    };

    dispatch(partners.actions.createPartner(partner));
    goBack();
  };

  return (
    <Button.Primary
      onPress={addPartner}
      textType={"Primary"}
      style={styles.button}
    >
      <Text.Primary white center bold>
        {t("ADD_PARTNER_SCREEN_ADD_THIS_PARTNER")}
      </Text.Primary>
    </Button.Primary>
  );
};

export default AddPartnerButton;
