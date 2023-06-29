import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { Paginator, PaginatorPropsType } from "./Paginator";

describe("Paginator component", () => {
    const onPageChangedMock = jest.fn();

    it("renders correctly with current page selected", () => {
        const component = renderer.create(
            <Paginator
                totalItemsCount={10}
                pageSize={5}
                currentPage={2}
                onPageChanged={onPageChangedMock}
                portionSize={3}
            />
        );

        const tree = component.toJSON() as ReactTestRendererJSON;
        expect(tree).toMatchSnapshot();
    });

    it("calls onPageChanged when a page is clicked", () => {
        const component = renderer.create(
            <Paginator
                totalItemsCount={10}
                pageSize={5}
                currentPage={2}
                onPageChanged={onPageChangedMock}
                portionSize={3}
            />
        );

        const pageElements = component.root.findAllByType("span");
        const secondPageElement = pageElements.find(
            (element) => element.props.children === 2
        );

        if (secondPageElement) {
            secondPageElement.props.onClick();
        }

        expect(onPageChangedMock).toHaveBeenCalledWith(2);
    });
});
