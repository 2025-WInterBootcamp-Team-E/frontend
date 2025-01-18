import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import DropDown from './DropDown';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { pretendard_bold, TextSizeXL } from '@/GlobalStyle';
import Button from '@/components/Button';

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	background-color: transparent;
	border-bottom: 2px solid transparent;
	width: 100%;
	z-index: 1000;
`;

const LeftSide = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Center = styled.nav`
	display: flex;
	gap: 2rem;
	list-style: none;
	justify-content: center;

	h3 {
		cursor: pointer;
		color: var(--neutral-100);
	}
`;

const RightSide = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: relative;
`;

const Logo = styled.h1`
	color: var(--neutral-100, #0a0a0a);
	cursor: pointer;
`;

const ProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const ProfileImage = styled.img`
	width: 2.5em;
	height: 2.5rem;
	border-radius: 50%;
	border: 2px solid white;
	object-fit: cover;
`;

const ProfileName = styled.span`
	${TextSizeXL}
	${pretendard_bold}
  color: var(--neutral-100);
`;

const DropdownButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
	display: flex;
	align-items: center;
`;

const ChevronIcon = styled(ChevronDown)`
	width: 1.5rem;
	height: 1.5rem;
	color: black;
`;

const StyledDropDownWrapper = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	margin-top: 0.5rem;
	z-index: 1001;
`;

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [profile, setProfile] = useState(null);
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				// 실제 API 호출 대신 모의 데이터 사용
				const mockApiResponse = {
					isLoggedIn: true,
					profile: {
						image: 'UserImage.png',
						name: 'TaciTa',
					},
				};

				if (mockApiResponse.isLoggedIn) {
					setIsLoggedIn(true);
					setProfile(mockApiResponse.profile);
				}
			} catch (error) {
				console.error('Error fetching profile:', error);
			}
		};

		fetchProfile();
	}, []);

	return (
		<HeaderContainer>
			<LeftSide>
				<Logo onClick={() => navigate('/')}>Logo</Logo>
			</LeftSide>

			<Center>
				<Button onClick={() => navigate('/intonation')}>
					<h3>Region</h3>
				</Button>
				<Button onClick={() => navigate('/pronunciation')}>
					<h3>Theme</h3>
				</Button>
				<Button>
					<h3>My Activity</h3>
				</Button>
			</Center>

			<RightSide>
				{isLoggedIn && profile ? (
					<ProfileContainer>
						<ProfileImage src={profile.image} alt='Profile' />
						<ProfileName>{profile.name}</ProfileName>
						<DropdownButton onClick={() => setIsDropDownOpen((prev) => !prev)}>
							<ChevronIcon />
						</DropdownButton>
						{isDropDownOpen && (
							<StyledDropDownWrapper>
								<DropDown isDropDownOpen={isDropDownOpen} />
							</StyledDropDownWrapper>
						)}
					</ProfileContainer>
				) : (
					<Button variant='white' rounded='xl' border='signin' onClick={() => navigate('/signin')}>
						Sign In
					</Button>
				)}
			</RightSide>
		</HeaderContainer>
	);
};

export default Header;
