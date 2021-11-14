import {render, screen} from '@testing-library/react'
import PrettyPrint from './PrettyPrint'
import jsonData from '../LocalPosts/local.json'

// this tests if the known element was rendered
test('check for a known element', () => {
    render(<PrettyPrint data={jsonData} />);
    const textElement = screen.getByText(/title/i);
    expect (textElement).toBeInTheDocument();
})


// build test to check actual json objects
test('check actual json', () => {
    render(<PrettyPrint data={jsonData} />);
    // get the json used by the PrettyPrint class
    // compare it with the known json
    // they should be identical
})