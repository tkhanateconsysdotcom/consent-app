import React, { useCallback } from "react";

import { Preference } from "interfaces";
import { SelectableListItem } from "components";

export const PreferenceSelection: React.FC<{
  selectedPreference: Preference;
  preference: Preference;
  onSelectPreference: (country: Preference) => void;
}> = ({ preference, onSelectPreference, selectedPreference }) => {
  const onClickPreference = useCallback(() => {
    onSelectPreference?.(preference);
  }, [preference, onSelectPreference]);

  return (
    <SelectableListItem
      key={preference.id}
      title={preference.preference.toUpperCase()}
      onPress={onClickPreference}
      selected={selectedPreference == preference}
    />
  );
};
