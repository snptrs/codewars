require 'code'
describe 'code' do
  it 'returns 0 when passed "cats"' do
    expect(duplicate_count("cats")).to eq 0
  end
  it 'returns 1 when passed "balls"' do
    expect(duplicate_count("balls")).to eq 1
  end
  it 'returns 2 when passed "abcdeaB"' do
    expect(duplicate_count("abcdeaB")).to eq 2
  end
end