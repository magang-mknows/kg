import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./Card";
import Images from "next/image";

configure({ adapter: new Adapter() });

describe("Card component", () => {
  const props = {
    className: "test-class",
    title: "Test Card",
    icon: <i className="fas fa-heart" />,
    src: "/test-image.jpg",
    imgwidth: 100,
    imgheight: 100,
    titleStyle: "text-xl",
    hasImage: true,
    onClick: jest.fn(),
  };

  it("renders without crashing", () => {
    shallow(<Card hasImage={false} />);
  });

  it("renders title when passed in", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.contains(<h1 className={props.titleStyle}>{props.title}</h1>)).toEqual(true);
  });

  it("renders icon when passed in", () => {
    const wrapper = shallow(<Card {...props} />);
    expect(wrapper.contains(props.icon)).toEqual(true);
  });

  it("does not render image when hasImage is false", () => {
    const noImageProps = {
      ...props,
      hasImage: false,
    };
    const wrapper = shallow(<Card {...noImageProps} />);
    expect(
      wrapper.contains(
        <Images
          src={noImageProps.src}
          alt={noImageProps.title}
          width={noImageProps.imgwidth}
          height={noImageProps.imgheight}
        />,
      ),
    ).toEqual(false);
  });
});
