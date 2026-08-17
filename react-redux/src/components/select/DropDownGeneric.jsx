import React, { useEffect, useRef } from "react";
import Select, {
  // MenuProps,
  // SelectComponentsConfig,
  // ValueContainerProps,
  components,
} from "react-select";
import styled from "@emotion/styled";
import { selectComponents } from "./selectComponents";
import { selectStyles } from "./selectStyles";

export const DarkGray = "#2d2d2d";
export const WeakGray = "#BFBFBF";

const StyledSelect = styled(Select)`
  width: ${({ selectWidth }) => selectWidth ?? "auto"};
  max-width: 200px;

  ${({ isLoading }) =>
    isLoading &&
    `
    svg {
      fill: transparent;
    }
  `};
`;

const StyledFakeSingleValue = styled("div")`
  &:first-letter {
    text-transform: capitalize;
  }
`;

const Container = styled("div")`
  display: flex;
  height: 26px;
  ${({ disabled }) => disabled && `opacity: 0.3;`}
`;

const Label = styled("p")`
  display: flex;
  align-items: center;
  padding: 0 7px;

  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  color: ${WeakGray};

  background-color: ${DarkGray};
  border-radius: 4px 0 0 4px;

  svg {
    fill: ${WeakGray};
    margin-right: ${({ withText }) => (withText ? "5px" : "0px")};
  }

  span {
    white-space: nowrap;
  }

  ${({ hideLabelOnIPad }) =>
    hideLabelOnIPad &&
    `
    @media (max-width: 1192px) {
      & span {
        display: none;
      }
    }
  `}
`;

function DropdownFinal({
  label,
  options,
  value,
  icon,
  hideLabelOnIPad,
  onChange,
  loading = false,
  selectWidth,
  disabled,
  isMulti,
  customActions,
  extraComponentsConfig,
}) {
  let allComponents = selectComponents;
  if (customActions) {
    allComponents = {
      ...allComponents,
      Menu: (p) => (
        <div {...p.innerProps} style={p.getStyles("menu", p)}>
          {p.children}
          {customActions}
        </div>
      ),
    };
  }

  if (extraComponentsConfig) {
    allComponents = { ...allComponents, ...extraComponentsConfig };
  }

  const selectEl = useRef(null);
  const containerEl = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        selectEl.current.state.menuIsOpen &&
        !containerEl.current.contains(e.target)
      ) {
        selectEl.current.onMenuClose();
      }
    };
    document.addEventListener("click", handleClickOutSide, { capture: true });
    console.log("Mount DROPDOWN!");
    return () =>
      document.removeEventListener("click", handleClickOutSide, {
        capture: true,
      });
  }, []);

  if (label === "Overlays:") {
    console.log("RENDER DROPDOWN:", options, allComponents);
  }

  return (
    <Container disabled={disabled} ref={containerEl}>
      <Label withText={!!label} hideLabelOnIPad={hideLabelOnIPad}>
        {icon}
        <span>{label}</span>
      </Label>
      <StyledSelect
        options={options}
        value={value}
        styles={selectStyles}
        isSearchable={false}
        components={allComponents}
        onChange={onChange}
        isLoading={!disabled && loading}
        loadingMessage={() => "Loading..."}
        placeholder={null}
        isDisabled={disabled}
        isMulti={isMulti}
        hideSelectedOptions={false}
        closeMenuOnSelect={!isMulti}
        selectWidth={selectWidth}
        ref={selectEl}
      />
    </Container>
  );
}

export function DropdownMulti(props) {
  const getDisplayValue = (values) => {
    if (!values || values.length === 0) {
      return "None";
    }

    if (values.length === 1) {
      return values[0].label;
    }

    if (props.alwaysShowValues) {
      return values.map((v) => v.label).join(", ");
    }

    return "Multi";
  };

  const extraComponentsConfig = {
    ValueContainer: (p) => {
      if (!p.selectProps.isLoading) {
        const values = p.getValue();
        const displayValue = getDisplayValue(values);
        return (
          <components.ValueContainer {...p}>
            {p.children}
            <StyledFakeSingleValue style={p.getStyles("singleValue", p)}>
              {displayValue}
            </StyledFakeSingleValue>
          </components.ValueContainer>
        );
      }
      return <components.ValueContainer {...p} />;
    },
  };

  return (
    <DropdownFinal
      {...props}
      extraComponentsConfig={extraComponentsConfig}
      isMulti
    />
  );
}
